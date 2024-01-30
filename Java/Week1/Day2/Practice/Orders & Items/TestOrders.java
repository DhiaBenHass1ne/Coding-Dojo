import java.util.ArrayList;
public class TestOrders {
    public static void main(String[] args) {
    
        // Menu items
        Item item1 = new Item();
        Item item2 = new Item();
        Item item3 = new Item();
        Item item4 = new Item();

        item1.name = "mocha";
        item2.name = "latte";
        item3.name = "drip coffee";
        item4.name = "cappuccino";

        item1.price = 3.5;
        item2.price = 2.5;
        item3.price = 1.5;
        item4.price = 4;

        // Order variables -- order1, order2 etc.
        Order order1 = new Order();
        Order order2 = new Order();
        Order order3 = new Order();
        Order order4 = new Order();

        order1.name = "Cindhuri";
        order2.name = "Jimmy";
        order3.name = "Noah";
        order4.name = "Sam";
        // Application Simulations
        order2.items.add(item1);
        order2.total+=item1.price;

        order3.items.add(item4);
        order3.total+=item4.price;

        order4.items.add(item2);
        order4.total+=item2.price;

        order1.ready=true;
        order2.ready=true;

        order4.items.add(item2);
        order4.items.add(item2);
        order4.total+=item2.price*2;
        // Use this example code to test various orders' updates
System.out.printf("----------------ORDER 1--------------/n");

        System.out.printf("Name: %s\n", order1.name);
        System.out.printf("Total: %s\n", order1.total); // 0.0
        System.out.printf("Ready: %s\n", order1.ready);
        System.out.printf("items: %s\n", order1.items);
System.out.printf("----------------ORDER 2--------------/n");
        System.out.printf("Name: %s\n", order2.name);
        System.out.printf("Total: %s\n", order2.total); // 0.0
        System.out.printf("Ready: %s\n", order2.ready);
        System.out.printf("items: %s\n", order2.items);
System.out.printf("----------------ORDER 3--------------/n");
        System.out.printf("Name: %s\n", order3.name);
        System.out.printf("Total: %s\n", order3.total); // 0.0
        System.out.printf("Ready: %s\n", order3.ready);
        System.out.printf("items: %s\n", order3.items);
System.out.printf("----------------ORDER 4--------------");
        System.out.printf("Name: %s\n", order4.name);
        System.out.printf("Total: %s\n", order4.total); // 0.0
        System.out.printf("Ready: %s\n", order4.ready);
        System.out.printf("items: %s\n", order4.items);
    }
}
