# Bootcamp Level 2 – Detailed Assignment Notes

## Project Overview
This is the second hands-on workshop of Ritual Academy.  
The goal is to build and understand a self-resolving binary prediction market that runs entirely on Ritual Chain without any backend or manual resolve button.

## Complete Market Lifecycle
1. createMarket()  
   - Sets the question, oracle URL, jsonPath, target value and comparator  
   - Converts human time into block numbers  
   - Calls Scheduler.schedule() with 3 attempts

2. Betting phase  
   - Users call bet() with YES or NO  
   - Stakes are recorded in mappings  
   - Betting closes at a fixed block

3. Resolution phase  
   - Scheduler wakes the contract at resolveBlock  
   - Contract selects an HTTP executor  
   - Calls HTTP precompile inside TEE  
   - Uses jq precompile to extract the number  
   - Compares observed value with target  
   - Sets market to YES, NO or Invalid

4. Claiming phase  
   - Winners call claimWinnings()  
   - Payout is calculated as stake * totalPool / winningPool  
   - Pull-based design keeps gas low

## Important Design Decisions
- Block-based timing avoids timestamp manipulation
- Three retries protect against temporary oracle or executor issues
- Invalid status protects users when data cannot be read
- Prepaid fees ensure the scheduled call can always pay for itself
- No loops in payout logic

## Personal Summary
I carefully reviewed the entire flow, the precompile usage, the retry mechanism and the refund path.  
The project is now ready for mainnet.
