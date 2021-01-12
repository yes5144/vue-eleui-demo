FROM nginx

COPY dist/ /usr/share/nginx/html/

COPY nginx.conf /etc/nginx/conf.d/default.conf

# RUN chown nginx:nginx -R /usr/share/nginx/html
# EXPOSE 80
# ENTRYPOINT [ "nginx", "-g", "daemon off;"]
