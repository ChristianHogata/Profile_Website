<?php


namespace App\Model;

class cadastro{
    protected $db;  
    
    public function __construct(\PDO $db){
        $this->db =$db;
    }


}


?>