// Setup
const recordCollection = {
    2548: {
        albumTitle: 'Slippery When Wet',
        artist: 'Bon Jovi',
        tracks: ['Let It Rock', 'You Give Love a Bad Name']
    },
    2468: {
        albumTitle: '1999',
        artist: 'Prince',
        tracks: ['1999', 'Little Red Corvette']
    },
    1245: {
        artist: 'Robert Palmer',
        tracks: []
    },
    5439: {
        albumTitle: 'ABBA Gold'
    }
};

// Only change code below this line
function updateRecords(records, id, prop, value) {
// Setup
    const recordCollection = {
        2548: {
            albumTitle: 'Slippery When Wet',
            artist: 'Bon Jovi',
            tracks: ['Let It Rock', 'You Give Love a Bad Name']
        },
        2468: {
            albumTitle: '1999',
            artist: 'Prince',
            tracks: ['1999', 'Little Red Corvette']
        },
        1245: {
            artist: 'Robert Palmer',
            tracks: []
        },
        5439: {
            albumTitle: 'ABBA Gold'
        }
    };

// Only change code below this line
    function updateRecords(records, id, prop, value) {
        const album = records[id];
        if (value === "") {
            delete album[prop];
        }

        else if (prop !== "tracks") {
            album[prop] = value;
        }
        else {
            album["tracks"] = album["tracks"] || [];
            album["tracks"].push(value);
        }
        return records;
    }

    updateRecords(recordCollection, 5439, 'artist', 'ABBA');
}

//updateRecords(recordCollection, 5439, 'artist', 'ABBA');
updateRecords(recordCollection, 5439, "tracks", "Take a Chance on Me")
