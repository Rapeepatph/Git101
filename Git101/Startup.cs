using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(Git101.Startup))]
namespace Git101
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
