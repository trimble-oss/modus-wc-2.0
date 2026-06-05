using Foundation;
using MauiHostingApp = Microsoft.Maui.Hosting.MauiApp;

namespace ModusWebComponents.MauiApp;

[Register("AppDelegate")]
public class AppDelegate : MauiUIApplicationDelegate
{
    protected override MauiHostingApp CreateMauiApp() => MauiProgram.CreateMauiApp();
}
