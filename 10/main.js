class Boat {
  constructor(color, material, maxSpeed) {
    this.color = color;       // цвет лодки
    this.material = material; // из чего сделана
    this.maxSpeed = maxSpeed; // максимальная скорость
  }

  sail() {
    console.log("Плывём по волнам!");
  }
}

class Transport {
  constructor(name) {
    this.name = name;
  }

  startEngine() {
    console.log("Двигатель запускается...");
  }
}

class Bus extends Transport {
  constructor(name, passengerCount) {
    super(name);
    this.passengerCount = passengerCount; // количество пассажиров
  }

  drive() {
    console.log(`Едем по маршруту с ${this.passengerCount} пассажирами`);
  }
}

class Plane extends Transport {
  constructor(name) {
    super(name);
  }

  startEngine() {
    console.log("Турбины запускаются...");
  }
}


const myBoat = new Boat("синяя", "дерево", 40);
console.log(myBoat);
myBoat.sail();

const cityBus = new Bus("Городской автобус", 30);
console.log(cityBus);
cityBus.startEngine();
cityBus.drive();

const boeing = new Plane("Boeing 737");
console.log(boeing);
boeing.startEngine();
