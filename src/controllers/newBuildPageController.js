
const { getNewBuildById } = require('../managers/newBuildManager')


const newBuildPageController = async (ctx) => {
    const { newbuildId } = ctx.params;
    const {items: data} = await getNewBuildById(newbuildId);
    await ctx.render('newBuildPage/index', {
        newBuild: data,
    });
}

module.exports = newBuildPageController;