<?php

class Bandeau {

static $publicAcces = array("index.php","tableau.php" , "preference.php" ,"date.php", "creation.php" );

public static $map = array( array("index.php", "Index"),array("logo.php", "Logo"),array("cv.php", "CV")
              );

   // $map s'utilisera ainsi : Bandeau::$map



   private function genererLien($href, $name) {
       // code à écrire


       	if($href == basename($_SERVER['PHP_SELF'])){
       		$lien ="<div class='lien ici'>";
       	}
       	else{
       	$lien ="<div class='lien'>";
        }


       $lien .= "<a style='text-decoration:none' color= 'red' href='" . $href . "'> ". $name . "</a></div>";
       	return $lien;
       }



  public function genereBarNav() {
       		$navBar = "";
          $navBar .="<div class='fond'>";


           foreach(Bandeau::$map as $link) {
              $navBar .= self::genererLien($link[0], $link[1]);
           }


           $navBar .= "</div><br/>";


           return $navBar;
       }

  }


$bandeau = new Bandeau();
print_r($bandeau->genereBarNav());
// print_r($map);

?>