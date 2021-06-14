export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gridsome-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '60c765e2ecfc7eade1287b10',
                  title: 'Sanity Studio',
                  name: 'sanity-gridsome-blog-studio-26prdx94',
                  apiId: '8dfb25ee-ed02-4a1b-82d3-b10148abbbfa'
                },
                {
                  buildHookId: '60c765e2e8a42bb5aa136df9',
                  title: 'Blog Website',
                  name: 'sanity-gridsome-blog-web-zjs2grur',
                  apiId: 'bec52e77-7e60-4c56-9370-0af35d150fb3'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/tarungangwani/sanity-gridsome-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gridsome-blog-web-zjs2grur.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
