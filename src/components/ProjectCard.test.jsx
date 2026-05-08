import {render,screen} from '@testing-library/react';
import ProjectCard from './ProjectCard';
import { expect, test } from 'vitest';

const mockProject = {
    id: 1,
    title: "Test Project",
    description: "This is a test project description.",
    category: "Testing"
}

test('renders project title', () => {
    render(<ProjectCard project={mockProject} />);
    expect(screen.getByText("Test Project")).toBeInTheDocument();
})

test('renders project description', () => {
    render(<ProjectCard project={mockProject} />);
    expect(screen.getByText("This is a test project description.")).toBeInTheDocument();
})

test('renders project category', () => {
    render(<ProjectCard project={mockProject} />);
    expect(screen.getByText("Testing")).toBeInTheDocument();
})