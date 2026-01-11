// Learning TypeScript. Classes & Interfaces. Singletons

// Overview

// In software engineering, the singleton pattern is a software design 
// pattern that restricts the instantiation of a class to one object. This is 
// useful when exactly one object is needed to coordinate actions across 
// the system. The concept is sometimes generalized to systems that 
// operate more efficiently when only one object exists, or that restrict 
// the instantiation to a certain number of objects.

// An implementation of the singleton pattern must:

//     ensure that only one instance of the singleton class ever exists;

//     and provide global access to that instance.

// Typically, this is done by:

//     declaring all constructors of the class to be private (or throw an error in constructor); and

//     providing a static method that returns a reference to the instance.

// Task

// Your task is to implement SingletonCounter class with static method 
// getInstance that returns instance of SingletonCounter. Constructor 
// of this class must be declared as private. This class should have inc() 
// which increments the value of the counter (default value of the counter is zero).

export class SingletonCounter {
  // TODO:
    static instance: SingletonCounter
    static count = 0;

    static getInstance(){
        if(SingletonCounter.instance == null){
            SingletonCounter.instance = new SingletonCounter();
        }
        return SingletonCounter.instance;
    }

    private constructor(){}

    inc(){
        SingletonCounter.count++;
        return SingletonCounter.count;
    }
}