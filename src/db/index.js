import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('profile.db');

export const init = () => {

    const promise = new Promise((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql('CREATE TABLE IF NOT EXISTS profile (id INTEGER PRIMARY KEY NOT NULL, userId TEXT NOT NULL, userPicture TEXT NOT NULL, userName TEXT NOT NULL, userLocation TEXT NOT NULL, darkMode INTEGER NOT NULL); ', 
                [], 
                () => { resolve() }, 
                (_, err) => { reject(err) });
        });
    });

    return promise;
}

export const generateProfile = (userId) => {
    // Genera un nuevo perfil vacío para el userId indicado
    const promise = new Promise((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql('INSERT INTO profile (userId, userPicture, userName, userLocation, darkMode) SELECT ?, ?, ?, ?, ? WHERE NOT EXISTS (SELECT 1 FROM profile WHERE userId = ?);', 
                [userId, "", "", "", 0, userId], 
                (_, result) => resolve(result), 
                (_, err) => reject(err)
            );
        });
    });

    return promise;
}

export const editProfile = (userId, userPicture, userName, userLocation) => {

    const promise = new Promise((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql('UPDATE profile set userPicture = ?, userName = ?, userLocation = ? WHERE userId = ?;', 
                [userPicture, userName, userLocation, userId], 
                () => resolve(), 
                (_, err) => reject(err)
            );
        });
    });

    return promise;
}

export const editSettings = (userId, darkMode) => {

    const promise = new Promise((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql('UPDATE profile set darkMode = ? WHERE userId = ?;', 
                [darkMode, userId], 
                () => resolve(), 
                (_, err) => reject(err)
            );
        });
    });

    return promise;
}

export const fetchProfile = (userId) => {
    // Devuelve el perfil correspondiente al userId
    const promise = new Promise((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql('SELECT * FROM profile WHERE userId = ? LIMIT 1;', 
                [userId], 
                (_, result) => resolve(result), 
                (_, err) => reject(err)
            );
        });
    });

    return promise;
}