import java.util.HashMap;
import java.util.Set;

public class Map {
    public static void main(String[] args){
        HashMap<String, String> songs = new HashMap<String, String>();
            songs.put("IEAO-IEAO","AAAAIIIEEEAAAAEEEEAAAOOOOO");
            songs.put("Blue","I'm blue dabadedabadadedabadedabada");
            songs.put("Ninja","III WANT TOOO BEE NINJAAAAAAA");
            songs.put("Never gonna give you","Never goona give you up");
        
            System.out.println(songs.get("Blue"));

        Set<String> keys = songs.keySet();
        for (String key : keys){
            System.out.println(key+":"+songs.get(key));
        }
    }
}

