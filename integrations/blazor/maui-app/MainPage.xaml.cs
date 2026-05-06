namespace ModusWebComponents.MauiApp;

public partial class MainPage : ContentPage
{
    // Port that the BlazingStory web project runs on (npm run dev / dotnet run)
    private const string StorybookPort = "5200";

    public MainPage()
    {
        InitializeComponent();

#if ANDROID
        // Android emulator routes to the host machine via this alias
        storybookWebView.Source = $"http://10.0.2.2:{StorybookPort}";
#else
        storybookWebView.Source = $"http://localhost:{StorybookPort}";
#endif
    }
}
