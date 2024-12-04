import { useTheme } from '@/context/theme-provider';
import { Link } from 'react-router-dom'
import SearchCities from './search-cities';

export const Header = () => {
    const { theme } = useTheme();
    return (
        <header className='sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur pl-5 supports-[backdrop-filter]:bg-background/60 py-2 flex justify-between'>
            <div className="container mx-auto flex h-16 items-center justify-between px-4">
                <Link to={"/"}>
                    <img 
                        src={theme === 'dark' ? '/logo.png' : '/logo2.png'}
                        alt='Weather logo'
                        className='h-14'
                    />
                </Link>
            </div>
            <div className='flex gap-4'>
                <SearchCities />
            </div>
        </header>
    )
}
