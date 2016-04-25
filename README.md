# angular2-starter
A quick-start for an Angular 2 app, using Skeleton and Redux.

# Troubleshooting

If you see the error:

```
npm ERR! cb() never called!
```

Then try upgrading your node version:


```
$ node -v 
v5.9.0

$ npm install -g n     # install 'n' node version manager

$ sudo n latest
installed : v5.11.0

$ node -v
v5.11.0
```

Relates to [Angular 2 Issue #8053](https://github.com/angular/angular/issues/8053).