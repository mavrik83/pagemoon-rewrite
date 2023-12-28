import React from 'react';
import {
    Card,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';

const Home = () => (
    <div>
        <Card className='w-fit'>
            <CardHeader>
                <CardTitle>
                    Welcome to <a href='https://nextjs.org'>Next.js!</a>
                </CardTitle>
                <CardDescription>
                    Get started by editing <code>pages/index.js</code>
                </CardDescription>
            </CardHeader>
        </Card>
    </div>
);

export default Home;
