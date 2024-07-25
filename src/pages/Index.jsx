import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Home, Settings, User } from 'lucide-react';

export default function Index() {
  return (
    <div className="container mx-auto p-4 bg-pink-50 min-h-screen">
      <header className="flex justify-between items-center mb-8 bg-pink-200 p-4 rounded-lg">
        <h1 className="text-3xl font-bold text-pink-800">My Pink Application</h1>
        <nav>
          <Button variant="ghost" className="mr-2 text-pink-700 hover:bg-pink-300"><Home className="mr-2" size={20} />Home</Button>
          <Button variant="ghost" className="mr-2 text-pink-700 hover:bg-pink-300"><User className="mr-2" size={20} />Profile</Button>
          <Button variant="ghost" className="text-pink-700 hover:bg-pink-300"><Settings className="mr-2" size={20} />Settings</Button>
        </nav>
      </header>

      <main>
        <Card className="mb-8 bg-pink-100 border-pink-300">
          <CardHeader>
            <CardTitle className="text-pink-800">Welcome to Pink Paradise</CardTitle>
            <CardDescription className="text-pink-600">This is a pink-themed application you can build upon.</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-4 text-pink-700">Start by modifying this component or adding new ones to create your desired pink application.</p>
            <Input placeholder="Enter some text..." className="mb-4 bg-pink-50 border-pink-300 focus:border-pink-500 focus:ring-pink-500" />
            <Button className="bg-pink-500 hover:bg-pink-600 text-white">Click me</Button>
          </CardContent>
          <CardFooter>
            <p className="text-sm text-pink-500">Footer information goes here</p>
          </CardFooter>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[1, 2, 3].map((item) => (
            <Card key={item} className="bg-pink-100 border-pink-300">
              <CardHeader>
                <CardTitle className="text-pink-800">Pink Card {item}</CardTitle>
                <CardDescription className="text-pink-600">Description for Pink Card {item}</CardDescription>
              </CardHeader>
              <CardContent>
                <img src="/placeholder.svg" alt={`placeholder ${item}`} className="mx-auto object-cover w-full h-40 mb-4 bg-pink-200" />
                <p className="text-pink-700">This is the content for Pink Card {item}. You can replace this with any content you need.</p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full border-pink-500 text-pink-700 hover:bg-pink-200">Action {item}</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </main>

      <footer className="mt-8 text-center text-pink-600 bg-pink-200 p-4 rounded-lg">
        <p>&copy; 2023 My Pink Application. All rights reserved.</p>
      </footer>
    </div>
  );
}