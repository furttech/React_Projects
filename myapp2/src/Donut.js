class Donut {

    // constructor for donut
    constructor(a,b){
      this.topping = this.setToppings(a);
      this.cake = this.setCake(b);
    }
   
    setToppings = function (sel) {
   
     /* Long Hand ** OLD WAY *** return
       var items = ['sprinkles', 'glaze', 'frosting'];
       return items[sel];
     */
   
     // inline return 
     return ['sprinkles', 'glaze', 'frosting'][sel];
   
    }
   
    setCake = (sel) => ['white','chocolate','fritter','long-john','bear-claw'][sel];
   
    calc = (a, b) => {
   
      const add = a + b;
      const sub = a - b;
      const mul = a * b;
      const div = a / b;
   
      return [add, sub, mul, div];
   
    } 
   
   }
   
   export default Donut;