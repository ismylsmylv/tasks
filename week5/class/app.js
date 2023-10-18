class canli {
    constructor(type, family, location) {
        this.type = type
        this.family = family
        this.location = location
    }
    getTypeInfo() {
        console.log(this.type + this.location) 
    }
    getFamInfo() {
        console.log(this.family + this.location)
    }
}


class insan extends canli {
    getFamInfo() {
        super.getFamInfo()
        console.log("modified human family");
    }
}

class heyvan extends canli {
    getFamInfo() {
        super.getFamInfo()
        console.log("modified animal family");
    }
}

class yadPlanetli extends canli {
    getFamInfo() {
        super.getFamInfo()
        console.log("modified alien family");
    }
}
let xaxxx=new yadPlanetli("aaaa", "sssss", "mars")
console.log(xaxxx.getFamInfo());