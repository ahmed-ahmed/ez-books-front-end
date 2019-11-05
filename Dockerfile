FROM ubuntu:16.04
RUN apt-get update
RUN apt-get install -y apache2
RUN apt-get clean
RUN a2enmod rewrite

COPY dist/ /var/www/html/

COPY 000-default.conf /etc/apache2/sites-enabled/000-default.conf
COPY .htaccess /var/www/html/.htaccess

EXPOSE 80

CMD apachectl -D FOREGROUND
