import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Home, Settings, User } from 'lucide-react';

export default function Index() {
  return (
    <div className="container mx-auto p-4">
      <header className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">My Application</h1>
        <nav>
          <Button variant="ghost" className="mr-2"><Home className="mr-2" size={20} />Home</Button>
          <Button variant="ghost" className="mr-2"><User className="mr-2" size={20} />Profile</Button>
          <Button variant="ghost"><Settings className="mr-2" size={20} />Settings</Button>
        </nav>
      </header>

      <main>
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Welcome</CardTitle>
            <CardDescription>This is a bare-bones application you can build upon.</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-4">Start by modifying this component or adding new ones to create your desired application.</p>
            <Input placeholder="Enter some text..." className="mb-4" />
            <Button>Click me</Button>
          </CardContent>
          <CardFooter>
            <p className="text-sm text-gray-500">Footer information goes here</p>
          </CardFooter>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[1, 2, 3].map((item) => (
            <Card key={item}>
              <CardHeader>
                <CardTitle>Card {item}</CardTitle>
                <CardDescription>Description for Card {item}</CardDescription>
              </CardHeader>
              <CardContent>
                <img src="/placeholder.svg" alt={`placeholder ${item}`} className="mx-auto object-cover w-full h-40 mb-4" />
                <p>This is the content for Card {item}. You can replace this with any content you need.</p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">Action {item}</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </main>

      <footer className="mt-8 text-center text-gray-500">
        <p>&copy; 2023 My Application. All rights reserved.</p>
      </footer>
    </div>
  );
}