exports.IndexPage = (req,res)=>{
    res.render('TYPLUS/index');
};

exports.ProjectPage = (req, res)=>{
    res.render('TYPLUS/project');
}

exports.Project = (req,res)=>{
        res.render('/project.html')
    };
