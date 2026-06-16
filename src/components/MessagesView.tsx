import { MessageSquare, Search, Plus } from 'lucide-react';

export default function MessagesView() {
  const threads = [
    {
      id: '1',
      author: 'Prof. Sarah Jenkins',
      authorRole: 'Instructor',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150',
      subject: 'Welcome to Module 4 + Required Reading',
      preview: 'Please make sure to read chapters 3 and 4 before our live session today...',
      date: '2 hours ago',
      unread: true,
      course: 'Foundations of UX Design'
    },
    {
      id: '2',
      author: 'David Chen',
      authorRole: 'TA',
      avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&q=80&w=150&h=150',
      subject: 'Re: Assignment deadline extension',
      preview: 'Yes, because of the holiday, everyone gets an extra 48 hours for the submission.',
      date: 'Yesterday',
      unread: false,
      course: 'Advanced Web Architecture'
    },
    {
      id: '3',
      author: 'Discussion Board',
      authorRole: 'Forum',
      avatar: null,
      subject: 'Week 2 Study Group Formation',
      preview: 'Is anyone in the PST timezone available for a group study on Thursday?',
      date: 'Oct 12',
      unread: false,
      course: 'Data Structures & Algorithms'
    }
  ];

  return (
    <div className="flex flex-col gap-6 text-left h-[calc(100vh-8rem)]">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-extrabold text-zinc-100 flex items-center gap-2">
            Messages & Discussions
          </h2>
          <p className="text-sm text-zinc-400 mt-1">
            Async course threads and direct messages.
          </p>
        </div>
        <button className="bg-accent-dark hover:bg-accent-dark text-white px-4 py-2 rounded-xl font-bold flex items-center gap-2 transition-colors">
          <Plus className="w-4 h-4" />
          New Message
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 h-full min-h-0">
        {/* Thread List */}
        <div className="lg:col-span-1 bg-zinc-900 rounded-2xl border border-zinc-800 flex flex-col overflow-hidden">
          <div className="p-4 border-b border-zinc-800">
            <div className="relative">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500" />
              <input 
                type="text" 
                placeholder="Search messages..." 
                className="w-full bg-zinc-950 border border-zinc-800 rounded-lg pl-9 pr-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-accent-dark text-zinc-200"
              />
            </div>
          </div>
          
          <div className="flex-1 overflow-y-auto">
            {threads.map((thread) => (
              <div 
                key={thread.id} 
                className={`p-4 border-b border-zinc-800/50 cursor-pointer transition-colors ${thread.unread ? 'bg-zinc-800/30' : 'hover:bg-zinc-800/20'}`}
              >
                <div className="flex justify-between items-start mb-2">
                  <div className="flex items-center gap-2">
                    {thread.avatar ? (
                      <img src={thread.avatar} alt={thread.author} className="w-6 h-6 rounded-full object-cover" />
                    ) : (
                      <div className="w-6 h-6 rounded-full bg-accent-dark/20 text-accent flex items-center justify-center">
                        <MessageSquare className="w-3 h-3" />
                      </div>
                    )}
                    <span className="font-bold text-sm text-zinc-200 truncate max-w-[120px]">{thread.author}</span>
                  </div>
                  <span className="text-[10px] text-zinc-500 font-mono whitespace-nowrap">{thread.date}</span>
                </div>
                
                <h4 className={`text-sm mb-1 truncate ${thread.unread ? 'font-bold text-zinc-100' : 'font-medium text-zinc-300'}`}>
                  {thread.subject}
                </h4>
                <p className="text-xs text-zinc-500 line-clamp-2 leading-relaxed">
                  {thread.preview}
                </p>
                
                <div className="mt-3 inline-block px-2 py-0.5 rounded text-[9px] uppercase tracking-wider font-bold bg-zinc-950 text-zinc-500 border border-zinc-800">
                  {thread.course}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Message Content Area (Empty State for now) */}
        <div className="lg:col-span-3 bg-zinc-900 rounded-2xl border border-zinc-800 flex flex-col items-center justify-center text-center p-8">
          <MessageSquare className="w-16 h-16 text-zinc-800 mb-6" />
          <h3 className="text-xl font-bold text-zinc-300">Select a thread</h3>
          <p className="text-zinc-500 max-w-sm mt-2">Choose a conversation from the left to view full thread history, replies, and attachments.</p>
          
          <button className="mt-8 text-accent font-bold hover:text-accent-light transition-colors flex items-center gap-2 text-sm bg-accent-dark/10 px-4 py-2 rounded-xl">
            <img src="https://upload.wikimedia.org/wikipedia/commons/e/e6/Microsoft_Teams_logo.svg" alt="Teams" className="w-4 h-4 opacity-80" />
             Open real-time Teams chat
          </button>
        </div>
      </div>
    </div>
  );
}
