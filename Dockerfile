FROM ubuntu/nginx
COPY . /var/www/html/
EXPOSE 80
CMD ["nginx","-g","daemon off;"]



