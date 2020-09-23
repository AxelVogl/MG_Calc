# MG_Calc
 make sure composer is installed and database mysql is running
 
 cd into this project</br>
 composer install</br>
 if(Server Error 500){</br>
  rename .env.example to .env</br>
  php artisan key:generate</br>
  php artisan cache:clear</br>
  php artisan config:clear</br>
 }</br>
 php artisan migrate</br>
 php artisan serve
