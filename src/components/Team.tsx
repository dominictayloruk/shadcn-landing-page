import { buttonVariants } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { InstagramLogoIcon, LinkedInLogoIcon } from '@radix-ui/react-icons';

const FacebookIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <title>Facebook</title>
    <path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z" />
  </svg>
);

interface TeamProps {
  imageUrl: string;
  name: string;
  position: string;
  socialNetworks: SociaNetworkslProps[];
}

interface SociaNetworkslProps {
  name: string;
  url: string;
}

const teamList: TeamProps[] = [
  {
    imageUrl: 'https://i.pravatar.cc/150?img=35',
    name: 'Emma Smith',
    position: 'Product Manager',
    socialNetworks: [
      { name: 'Linkedin', url: 'http://linkedin.com' },
      {
        name: 'Facebook',
        url: 'https://www.facebook.com/',
      },
      {
        name: 'Instagram',
        url: 'https://www.instagram.com/',
      },
    ],
  },
  {
    imageUrl: 'https://i.pravatar.cc/150?img=60',
    name: 'John Doe',
    position: 'Tech Lead',
    socialNetworks: [
      { name: 'Linkedin', url: 'http://linkedin.com' },
      {
        name: 'Facebook',
        url: 'https://www.facebook.com/',
      },
      {
        name: 'Instagram',
        url: 'https://www.instagram.com/',
      },
    ],
  },
  {
    imageUrl: 'https://i.pravatar.cc/150?img=36',
    name: 'Ashley Ross',
    position: 'Frontend Developer',
    socialNetworks: [
      { name: 'Linkedin', url: 'http://linkedin.com' },

      {
        name: 'Instagram',
        url: 'https://www.instagram.com/',
      },
    ],
  },
  {
    imageUrl: 'https://i.pravatar.cc/150?img=17',
    name: 'Bruce Rogers',
    position: 'Backend Developer',
    socialNetworks: [
      { name: 'Linkedin', url: 'http://linkedin.com' },
      {
        name: 'Facebook',
        url: 'https://www.facebook.com/',
      },
    ],
  },
];

export const Team = () => {
  const socialIcon = (iconName: string) => {
    switch (iconName) {
      case 'Linkedin':
        return <LinkedInLogoIcon className="w-5 h-5" />;

      case 'Facebook':
        return <FacebookIcon className="w-5 h-5" />;

      case 'Instagram':
        return <InstagramLogoIcon className="w-5 h-5" />;
    }
  };

  return (
    <section id="team" className="container py-24 sm:py-32">
      <h2 className="text-3xl md:text-4xl font-bold">
        <span className="bg-linear-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Our Dedicated{' '}
        </span>
        Crew
      </h2>

      <p className="mt-4 mb-10 text-xl text-muted-foreground">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis dolor pariatur sit!
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 gap-y-10">
        {teamList.map(({ imageUrl, name, position, socialNetworks }: TeamProps) => (
          <Card
            key={name}
            className="bg-muted/50 relative mt-8 flex flex-col justify-center items-center"
          >
            <CardHeader className="mt-8 flex justify-center items-center pb-2">
              <img
                src={imageUrl}
                alt={`${name} ${position}`}
                className="absolute -top-12 rounded-full w-24 h-24 aspect-square object-cover"
              />
              <CardTitle className="text-center">{name}</CardTitle>
              <CardDescription className="text-primary">{position}</CardDescription>
            </CardHeader>

            <CardContent className="text-center pb-2">
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </CardContent>

            <CardFooter>
              {socialNetworks.map(({ name, url }: SociaNetworkslProps) => (
                <div key={name}>
                  <a
                    rel="noreferrer noopener"
                    href={url}
                    target="_blank"
                    className={buttonVariants({
                      variant: 'ghost',
                      size: 'sm',
                    })}
                  >
                    <span className="sr-only">{name} icon</span>
                    {socialIcon(name)}
                  </a>
                </div>
              ))}
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};
