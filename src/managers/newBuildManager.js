const  fetch = require('node-fetch');

const getAllNewBuilds = () => fetch('https://dom.ria.com/k8s/api/newbuild/search/?cityId=1&withoutLimit=true&withoutSold=1')
    .then(res => res.json());

const getNewBuildById = (newbuildId) => fetch(`https://dom.ria.com/k8s/api/newbuild/search/?id=${newbuildId}`) //https://dom.ria.com/k8s/api/newbuild/search/?id=${id}
    .then(res => res.json());

module.exports = {
    getAllNewBuilds,
    getNewBuildById,
};