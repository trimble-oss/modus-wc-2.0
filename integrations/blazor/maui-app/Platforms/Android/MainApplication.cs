using Android.App;
using Android.Runtime;
using MauiHostingApp = Microsoft.Maui.Hosting.MauiApp;

namespace ModusWebComponents.MauiApp;

[Application]
public class MainApplication : MauiApplication
{
    public MainApplication(IntPtr handle, JniHandleOwnership ownership)
        : base(handle, ownership)
    {
    }

    protected override MauiHostingApp CreateMauiApp() => MauiProgram.CreateMauiApp();
}
