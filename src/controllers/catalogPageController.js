
const { getAllNewBuilds } = require('../managers/newBuildManager')


const catalogPageController = async (ctx) => {
    const {items: data} = await getAllNewBuilds();
    await ctx.render('catalogPage/index', {
        newBuilds: data,
    });
}

module.exports = catalogPageController;