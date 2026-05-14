import { Alert, AlertDescription } from 'src/components/ui/alert';

const BasicAlerts = () => {
  return (
    <>
      <div className="rounded-xl shadow-md bg-white dark:bg-dark p-6 relative w-full wrap-break-word">
        <h5 className="card-title mb-4 text-dark dark:text-white">Alert</h5>
        <div className="grid grid-cols-12 gap-6">
          <div className="lg:col-span-6 col-span-12">
            <div className="flex flex-col gap-2">
              <Alert className="bg-primary text-white border-primary">
                <AlertDescription className="font-medium">
                  <span className="font-bold">Primary</span> - A simple primary alert
                </AlertDescription>
              </Alert>

              <Alert className="bg-secondary text-white border-secondary">
                <AlertDescription className="font-medium">
                  <span className="font-bold">Secondary</span> A simple Secondary alert
                </AlertDescription>
              </Alert>

              <Alert className="bg-success text-white border-success">
                <AlertDescription className="font-medium">
                  <span className="font-bold">Success</span> A simple Success alert
                </AlertDescription>
              </Alert>

              <Alert className="bg-info text-white border-info">
                <AlertDescription className="font-medium">
                  <span className="font-bold">Info</span> A simple Info alert
                </AlertDescription>
              </Alert>

              <Alert className="bg-warning text-white border-warning">
                <AlertDescription className="font-medium">
                  <span className="font-bold">Warning</span> A simple Warning alert
                </AlertDescription>
              </Alert>

              <Alert variant="destructive">
                <AlertDescription className="font-medium">
                  <span className="font-bold">Error</span> A simple Error alert
                </AlertDescription>
              </Alert>

              <Alert className="bg-dark text-white border-dark dark:bg-white dark:text-dark">
                <AlertDescription className="font-medium">
                  <span className="font-bold">Dark</span> A simple Dark alert
                </AlertDescription>
              </Alert>
            </div>
          </div>
          <div className="lg:col-span-6 col-span-12">
            <div className="flex flex-col gap-2">
              <Alert className="bg-primary/10 text-primary border-primary/20">
                <AlertDescription className="font-medium">
                  <span className="font-bold">Primary</span> - A simple primary alert
                </AlertDescription>
              </Alert>

              <Alert className="bg-secondary/10 text-secondary border-secondary/20">
                <AlertDescription className="font-medium">
                  <span className="font-bold">Secondary</span> A simple Secondary alert
                </AlertDescription>
              </Alert>

              <Alert className="bg-success/10 text-success border-success/20">
                <AlertDescription className="font-medium">
                  <span className="font-bold">Success</span> A simple Success alert
                </AlertDescription>
              </Alert>

              <Alert className="bg-info/10 text-info border-info/20">
                <AlertDescription className="font-medium">
                  <span className="font-bold">Info</span> A simple Info alert
                </AlertDescription>
              </Alert>

              <Alert className="bg-warning/10 text-warning border-warning/20">
                <AlertDescription className="font-medium">
                  <span className="font-bold">Warning</span> A simple Warning alert
                </AlertDescription>
              </Alert>

              <Alert className="bg-error/10 text-error border-error/20">
                <AlertDescription className="font-medium">
                  <span className="font-bold">Error</span> A simple Error alert
                </AlertDescription>
              </Alert>

              <Alert className="bg-dark/5 text-dark border-dark/10 dark:text-white/80 dark:border-white/20">
                <AlertDescription className="font-medium">
                  <span className="font-bold">Light</span> A simple Light alert
                </AlertDescription>
              </Alert>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BasicAlerts;
