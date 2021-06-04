async function post(request, response) {
    const db = request.mongoClient.db();
    const UserCollection = db.collection('admissions');
    const insert = await UserCollection.insertOne({
        admissionsId:  request .body.admissionsId,
        firstname:   request.body.firstname,
        lastname:   request.body.lastname,
        fathername:   request.body.fathername,
        mothername:   request.body. mothername,
        email: request.body.email,
        dateofborth: request.body.dateofborth,
        address: request.body.address,
        contact_no:request.body.contact_no
        
    });
    response.send({ success: true, id: insert.insertedId });
}

module.exports = post;
