type ProfileCardProps = {
    name: string;
    bio: string;
  };
  
  export default function ProfileCard({ name, bio }: ProfileCardProps) {
    return (
      <div className="border rounded-lg p-4 shadow-md max-w-sm text-center">
        <h2 className="text-2xl font-bold">{name}</h2>
        <p className="text-gray-600 mt-2">{bio}</p>
      </div>
    );
  }  