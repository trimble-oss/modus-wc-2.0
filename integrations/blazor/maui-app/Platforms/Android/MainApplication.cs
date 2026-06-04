using Android.App;
using Android.Runtime;
using MauiHostingApp = Microsoft.Maui.Hosting.MauiApp;

namespace ModusWebComponents.MauiApp;

#if DEBUG
[Application(UsesCleartextTraffic = true)]
#else
[Application]
#endif
public class MainApplication : MauiApplication
{
    public MainApplication(IntPtr handle, JniHandleOwnership ownership)
        : base(handle, ownership)
    {
    }

    protected override MauiHostingApp CreateMauiApp() => MauiProgram.CreateMauiApp();
}
