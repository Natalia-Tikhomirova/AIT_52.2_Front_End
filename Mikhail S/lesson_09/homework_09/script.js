// Задание 1
// Создайте классы: Plant, Rose.
// Роза должна наследовать Растение. Пусть у растения будут поля:
// рост,
// возраст.
// И метод grow, который увеличивает его рост на 10 см.

// У розы должно быть поле - количество бутонов (numberOfFlowers). Создайте объект класса розы, вызовите метод.

class Plant{
    constructor(height,age){
        this.height = height;
        this.age = age;
    }
    info(){
        console.log(`Рост: ${this.height} Возраст: ${this.age} `);        
    }
}

class Rose extends Plant{
    constructor(height,age,numberOfFlowers){
        super(height,age) // передает поля из  Plant в Rose
        this.numberOfFlowers = numberOfFlowers;
    }
}