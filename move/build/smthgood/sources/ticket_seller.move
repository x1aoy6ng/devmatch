module ticket_seller_addr::ticket_seller {
    use std::error;
    #[test_only]
    use std::string; // add this
    use std::signer;
    use aptos_framework::event;
    use std::vector;

    // Define a resource that holds a ticket
    struct Ticket has key, store {
        event_name: vector<u8>,
        date: u64,
        price: u64,
        owner: address,
    }

    // Holds the list of all tickets
    struct TicketListings has key {
        tickets: vector<Ticket>,
    }

    #[event]
    struct TicketPurchased has drop, store {
        account: address,
        event_name: vector<u8>,
        date: u64,
        price: u64,
    }

    /// There are no tickets present
    const ENO_TICKETS: u64 = 0;

    // Initialize the ticket listings for the account
    public entry fun init_ticket_listings(account: signer){
        let account_addr = signer::address_of(&account);
        if (!exists<TicketListings>(account_addr)) {
            move_to(&account, TicketListings {
                tickets: vector::empty<Ticket>(),
            });
        }
    }

    // Book a ticket
    public entry fun book_ticket(account: signer, event_name: vector<u8>, date: u64, price: u64) acquires TicketListings {
        let account_addr = signer::address_of(&account);
        assert!(exists<TicketListings>(account_addr), error::not_found(ENO_TICKETS));

        let listings = borrow_global_mut<TicketListings>(account_addr);
        vector::push_back(&mut listings.tickets, Ticket {
            event_name: event_name,
            date: date,
            price: price,
            owner: account_addr,
        });

        // Emit the event that a ticket has been purchased
        event::emit(TicketPurchased {
            account: account_addr,
            event_name: event_name,
            date: date,
            price: price,
        });
    }

    // View a ticket by its index
    public fun view_ticket(account_addr: address, index: u64): Ticket acquires TicketListings {
        assert!(exists<TicketListings>(account_addr), error::not_found(ENO_TICKETS));
        let listings = borrow_global<TicketListings>(account_addr);
        assert!(index < vector::length(&listings.tickets), error::not_found(ENO_TICKETS)); // Check index bounds
        let ticket = vector::borrow(&listings.tickets, index);
        Ticket {
            event_name: ticket.event_name,
            date: ticket.date,
            price: ticket.price,
            owner: ticket.owner,
        }
    }

    // Transfer ticket ownership
    public entry fun transfer_ticket(account: signer, to: address, ticket_index: u64) acquires TicketListings {
        let account_addr = signer::address_of(&account);
        assert!(exists<TicketListings>(account_addr), error::not_found(ENO_TICKETS));

        let listings = borrow_global_mut<TicketListings>(account_addr);
        assert!(ticket_index < vector::length(&listings.tickets), error::not_found(ENO_TICKETS)); // Check index bounds
        let ticket_ref = vector::borrow_mut(&mut listings.tickets, ticket_index);
        ticket_ref.owner = to;
    }
}