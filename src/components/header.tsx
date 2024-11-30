import { useTheme } from '@/context/theme-provider';
import { Link } from 'react-router-dom'

export const Header = () => {
    const { theme } = useTheme();
    return (
        <header className='sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur py-2 pl-5 supports-[backdrop-filter]:bg-background/60 py-2'>
            <div className="container mx-auto flex h-16 items-center justify-between px-4">
                <Link to={"/"}>
                    <img 
                        src={theme === 'dark' ? '/logo.png' : '/logo2.png'}
                        alt='Weather logo'
                        className='h-14'
                    />
                </Link>
            </div>
        </header>
    )
}
