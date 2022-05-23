let testBoolOne = false;
let testBoolTwo = true;

function getUserByName() {
    let querySQL = "SELECT * FROM AnotherTable WHERE ";

    if(testBoolOne) {
        querySQL = querySQL + "RowOne = 'Test1' OR ";
    }

    if(testBoolTwo) {
        querySQL = querySQL + "RowOne = 'Test2' OR ";
    }

    querySQL = querySQL + "RowOne = 'Test3' OR RowOne = 'Test4' OR RowOne = 'Tetst'";

    const finalizedSelectQuery = db.prepare(querySQL).all();

    return finalizedSelectQuery;
}
