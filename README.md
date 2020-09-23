# MG_Calc
 make sure composer is installed and database mysql is running
 
 cd into this project
 composer install
 if(Server Error 500){
  rename .env.example to .env
  php artisan key:generate
  php artisan cache:clear
  php artisan config:clear
 }
 php artisan migrate
 php artisan serve
