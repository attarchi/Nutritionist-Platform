import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ThemeToggle } from "@/components/theme-toggle"

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8 space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-semibold text-dark-outline-green mb-2">
            Welcome to Mansouri
          </h1>
          <p className="text-dark-gray">
            Professional platform for nutritionists to manage client diets and track progress.
          </p>
        </div>
        <ThemeToggle />
      </div>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-dark-outline-green">Quick Actions</h2>
        <div className="flex flex-wrap gap-4">
          <Button className="bg-leaf-green hover:bg-leaf-green/90">
            Create Diet Plan
          </Button>
          <Button variant="outline" className="border-leaf-green text-leaf-green hover:bg-leaf-green/10">
            View Clients
          </Button>
          <Button variant="ghost" className="text-leaf-green hover:bg-leaf-green/10">
            Check Messages
          </Button>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-dark-outline-green">Client Overview</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card className="border-l-4 border-l-light-apple-green">
            <CardHeader>
              <CardTitle>Active Clients</CardTitle>
              <CardDescription>Currently following diet plans</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold text-leaf-green">24</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-success">
            <CardHeader>
              <CardTitle>On Track</CardTitle>
              <CardDescription>Following their plans</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold text-success">18</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-warning">
            <CardHeader>
              <CardTitle>Needs Attention</CardTitle>
              <CardDescription>Requiring follow-up</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold text-warning">4</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-error">
            <CardHeader>
              <CardTitle>At Risk</CardTitle>
              <CardDescription>Not following plans</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold text-error">2</p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-dark-outline-green">Recent Activity</h2>
        <div className="grid gap-4">
          <Card>
            <CardHeader>
              <CardTitle>Client Updates</CardTitle>
              <CardDescription>Latest client activities and messages</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-light-apple-green/20 flex items-center justify-center">
                  <span className="text-leaf-green font-medium">JD</span>
                </div>
                <div>
                  <p className="font-medium">John Doe updated their food log</p>
                  <p className="text-sm text-medium-gray">2 hours ago</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-light-apple-green/20 flex items-center justify-center">
                  <span className="text-leaf-green font-medium">AS</span>
                </div>
                <div>
                  <p className="font-medium">Alice Smith sent a message</p>
                  <p className="text-sm text-medium-gray">4 hours ago</p>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full border-leaf-green text-leaf-green hover:bg-leaf-green/10">
                View All Activity
              </Button>
            </CardFooter>
          </Card>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-dark-outline-green">Quick Add Client</h2>
        <Card>
          <CardHeader>
            <CardTitle>New Client Registration</CardTitle>
            <CardDescription>Add a new client to your practice</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" placeholder="Enter client's full name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="Enter client's email" />
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline" className="border-leaf-green text-leaf-green hover:bg-leaf-green/10">
                  View Instructions
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Adding a New Client</DialogTitle>
                  <DialogDescription>
                    Follow these steps to properly onboard a new client.
                  </DialogDescription>
                </DialogHeader>
                <div className="py-4 space-y-2">
                  <p>1. Collect basic information</p>
                  <p>2. Schedule initial consultation</p>
                  <p>3. Create personalized diet plan</p>
                  <p>4. Set up client dashboard</p>
                </div>
                <DialogFooter>
                  <Button className="bg-leaf-green hover:bg-leaf-green/90">Got it</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
            <Button className="bg-leaf-green hover:bg-leaf-green/90">
              Add Client
            </Button>
          </CardFooter>
        </Card>
      </section>
    </div>
  )
}
