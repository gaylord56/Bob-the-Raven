using System;
using Discord;
using Discord.WebSocket;
using System.Threading.Tasks;

namespace BobTheRaven
{
    public class Program
    {
        static void Main(string[] args)
        => new Program().StartAsync().GetAwaiter().GetResult();

        private DiscordSocketClient _client;

        private CommandHandler _handler;

        public async Task StartAsync()
        {
            _client = new DiscordSocketClient();

            await _client.LoginAsync(TokenType.Bot, "NDE4ODI2MzcyMjY2MzI4MDk1.DXodeg.UR04yFKZ6-ioLGVUcE5kdkPfezM");

            await _client.StartAsync();

            _handler = new CommandHandler(_client);

            await Task.Delay(-1);
        }
    }
}
