import java.util.ArrayList;
import java.util.Random;

class Puzzle {
    Random rand = new Random();

		public ArrayList<Integer> getTenRolls(){
            ArrayList<Integer> rolls = new ArrayList<Integer>();
            for (int i=0; i<10; i++){
                rolls.add(rand.nextInt(21));
            }
            return rolls;
        }
        
        public char getRandomLetter(){
            String alpha = "abcdefghijklmnopqrstuvwxyz";
            int num = rand.nextInt(26);
            char letter = alpha.charAt(num);
            return letter;
        }

        public String generatePassword(){
            String newStr="";
            for (int i=0; i<9; i++){
            char letter = getRandomLetter();
                newStr=newStr+letter;}
            return newStr;
        }

        public ArrayList<String> getNewPasswordSet(int num){
            ArrayList<String> passwords = new ArrayList<String>();
            for (int i=0; i<num;i++){
                String pw=generatePassword();
                passwords.add(pw);
            }
            return passwords;
        }

}