# RD Form plugin

### How to dev install
Require `node` and `gulp`.
```
1. git clone https://github.com/djjun/rdform.git
2. cd rdform
3. npm install
4. cd rest
5. node server.js
6. open index.html in root
```

### How to build
```
1. go cmd in root
2. gulp build
3. in the dist folder will be created uglify file (.min.js)
```

### How to install in clients
```
1. include jquery and boostrap js files
2. include boostrap css file
3. include rdform js file
4. add <a id="integration_form" href="#">Quero receber materiais por email</a> inside <body>
5. add scripts and options
```

Script and options :

```js
<script type="text/javascript" charset="utf-8">
    $(document).ready(function() {
        options = {
            'token':'62bb61431348e22850828a5829c4373faafe29c1',
            'secret':'51a266c2844ccd5cac83d88de88d82d05358aa51',
            'modal':false,
            'fields':{
                'estado':['PR','SC','SP','RS'],
                'nível':['Iniciante','Intermediário','Avançado','Ninja']
                }
            };

        $('#integration_form').rdform(options);
    });
</script>
```