<?php

namespace App;

use MF\Init\Bootstrap;

class Routes extends Bootstrap {

    public function iniRoutes(){

        $routes['home'] = array(
            'routes' => '/',
            'controller' => 'indexController',
            'action' => 'index'
        );

        
        $this->setRoutes($routes);
    }

   
}


?>