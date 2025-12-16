import { useState } from 'react';
import Button from './Button';

export default function BlogCard({ title, description }: { title: string;  description: string} ) {

  return (
    /**Style out the blog card vertical bit wider than product card */
    <div className="blog-card">
      <h2>{title}</h2>
      <p>{description}</p>
      <Button props="VIEW MORE" />
    </div>
  );
}
