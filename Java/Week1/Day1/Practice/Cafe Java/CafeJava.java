public class CafeJava {
    public static void main(String[] args) {
        // APP VARIABLES
        // Lines of text that will appear in the app. 
        String generalGreeting = "Welcome to Cafe Java, ";
        String pendingMessage = ", your order will be ready shortly";
        String readyMessage = ", your order is ready";
        String displayTotalMessage = "Your total is $";
        
        // Menu variables (add yours below)
        double mochaPrice = 3.5;
        double dripPrice = 1.5;
        double cappuccinoPrice = 4.5;
        double lattePrice = 2.5;
    
        // Customer name variables (add yours below)
        String customer1 = "Cindhuri";
        String customer2 = "Noah";
        String customer3 = "Sam";
        String customer4 = "Jimmy";
    
        // Order completions (add yours below)
        boolean isReadyOrder1 = false;
        boolean isReadyOrder2 = true;
        boolean isReadyOrder3 = true;
        boolean isReadyOrder4 = true;
    
        // APP INTERACTION SIMULATION (Add your code for the challenges below)
        // Example:
        System.out.println(generalGreeting + customer1+ pendingMessage); // Displays "Welcome to Cafe Java, Cindhuri"
    	// ** Your customer interaction print statements will go here ** //
        if(isReadyOrder2){
            System.out.println(customer2+readyMessage+displayTotalMessage+cappuccinoPrice);
        }else{System.out.println(customer2+pendingMessage);}

        if(isReadyOrder3){
            System.out.println(customer3+readyMessage+displayTotalMessage+(lattePrice*2));
        }else{System.out.println(customer3+pendingMessage);}

        System.out.println(customer2+displayTotalMessage+(lattePrice-dripPrice));

        


    }
}
