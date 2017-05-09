function Position(x, y, z) {
    this.x = x;
    this.y = y;
    this.z = z;
}

function HeavenlyBody(id, name, weight, speed, possition, distance) {
    this.id = id;
    this.name = name;
    this.weight = weight;
    this.speed = speed;
    this.possition = possition;
    this.distance = distance;

    this.Fly = function () {

    };
    this.showdistance = function (distance) {
        return distance;
    };
    this.showPropertie = function (prop) {
        return arguments;
    };
    this.showAllProperties = function () {
        return {
                   id : id,
                 name : name,
               weight : weight,
                speed : speed,
            possition : possition,
             distance : distance
        };
    };
}
