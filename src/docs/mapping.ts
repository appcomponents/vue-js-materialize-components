import docsPages = require('./pages');

var mapping = {};
mapping['*'] = {
    component: {
        template: '<h1>Not Found</h1>'
    }
};

docsPages.forEach((page: Route) => {
    page.urls.forEach((url) => {
        mapping[url] = {
            component: page.component,
            title: page.title
        };
    })
});

export = mapping;