<?PHP 

require (__DIR__."/db.php"); 

 class ServerServices{

    // Attributes
   
    public $jsonList;
 
    public function __construct() { } 

    public static function getAllServer(){

            $conn = new connectionDB();
       
            $conn->createConnection();
    
            $query= "SELECT * FROM server";
            $result=$conn->executeQuery($query);
            $server = []; 
           
            while($row = $result->fetch_assoc()){   
                array_push($server, $row); // get all server available in DB
            }

            // Closing the connection with BD
            $conn->closeConnection();
            
            return $server; 

    }
    public static function getAllHost(){

        $conn = new connectionDB();
   
        $conn->createConnection();

        $query= "SELECT * FROM host";
        $result=$conn->executeQuery($query);
        $host = []; 
      
       
        while($row = $result->fetch_assoc()){
            array_push($host, $row); //get all hosting available in DB
        }

        // Closing the connection with BD
        $conn->closeConnection();

        return $host ;

}
}

?>