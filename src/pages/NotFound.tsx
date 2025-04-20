import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="relative">
        {/* Glowing background effects */}
        <div className="absolute top-[-50%] left-[-20%] w-72 h-72 rounded-full bg-primary/10 filter blur-[100px]"></div>
        <div className="absolute bottom-[-30%] right-[-10%] w-60 h-60 rounded-full bg-accent/10 filter blur-[100px]"></div>
        
        <div className="text-center z-10 relative px-4">
          <h1 className="text-9xl font-bold font-orbitron mb-6 animate-text-flicker">
            <span className="text-primary">4</span>
            <span className="text-accent">0</span>
            <span className="text-primary">4</span>
          </h1>
          
          <div className="h-px w-full max-w-md mx-auto bg-gradient-to-r from-transparent via-border to-transparent mb-6"></div>
          
          <h2 className="text-2xl md:text-3xl font-medium mb-8 text-muted-foreground">
            <span className="text-destructive">Error:</span> Signal lost in cyberspace
          </h2>
          
          <p className="max-w-md mx-auto text-muted-foreground mb-8">
            The digital pathway you're searching for doesn't exist or has been 
            corrupted in the system.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              to="/"
              className="px-6 py-3 bg-primary/10 border border-primary text-primary rounded-md hover:bg-primary/20 transition-colors flex items-center w-full sm:w-auto justify-center"
            >
              <Home size={18} className="mr-2" />
              Return to Base
            </Link>
            
            <button 
              onClick={() => window.history.back()}
              className="px-6 py-3 bg-secondary text-foreground rounded-md hover:bg-secondary/70 transition-colors flex items-center w-full sm:w-auto justify-center"
            >
              <ArrowLeft size={18} className="mr-2" />
              Go Back
            </button>
          </div>
          
          <div className="mt-8 inline-block py-1 px-3 bg-secondary/50 rounded-md text-sm text-muted-foreground border border-border/50">
            <code>Path: {location.pathname}</code>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
